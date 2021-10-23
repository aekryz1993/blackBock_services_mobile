import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import {CategoryContext} from '@components/contexts/CategoryProduct';

// ------------------------------- Head -----------------------------------

const Head = ({serviceName, image}) => {
  const [isedit, setisedit] = useState(false);
  const [title, setTitle] = useState(serviceName);
  const [text, settext] = useState(title);

  const onTitleChange = () => {
    if (text) {
      setTitle(text);
    } else {
      settext(title);
    }
    setisedit(false);
  };

  const onImageChange = () => {
    ImagePicker.openPicker({
      cropping: true,
    }).then(_image => {
      console.log(_image);
    });
  };

  return (
    <View style={styles.head}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.picture} />
        <TouchableOpacity style={styles.submitImage} onPress={onImageChange}>
          <FeatherIcon
            style={styles.imageUpdate}
            name="edit"
            size={20}
            color="rgba(255,255,255,1)"
          />
        </TouchableOpacity>
      </View>
      {!isedit ? (
        <TouchableOpacity
          style={styles.titleContainer}
          onPress={() => setisedit(true)}>
          <Text style={styles.title}>{title}</Text>
          <FontAwesomeIcon name="edit" size={16} color="rgba(50,50,50,1)" />
        </TouchableOpacity>
      ) : (
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.inputTitle}
            onChangeText={settext}
            value={text}
          />
          <TouchableOpacity
            style={styles.submitTitle}
            onPress={() => setisedit(false)}>
            <AntDesignIcon name="close" size={32} color="rgba(255,20,20,1)" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitTitle} onPress={onTitleChange}>
            <FeatherIcon name="check" size={32} color="rgba(20,100,255,1)" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const Category = ({product, category, navigation, serviceName}) => {
  const prices = product.Price;

  const onSubmit = () => {
    navigation.navigate('EditProductScreen', {
      product,
      category,
      prices,
      serviceName,
    });
  };

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.leftContent}>
        <Text style={styles.labelItem}>{product.label}</Text>
        <View style={styles.pricesContainer}>
          <Text style={styles.textPrice}>${prices.dollar}</Text>
          <Text style={styles.textPrice}>€{prices.euro}</Text>
          <Text style={styles.textPrice}>{prices.dinnar} DZD</Text>
        </View>
      </View>
      <View style={styles.centerContent}>
        {category === 'id' &&
          (product.isAvailable ? (
            <Text style={styles.available}>متوفر</Text>
          ) : (
            <Text style={styles.notAvailable}>غير متوفر</Text>
          ))}
      </View>
      <View style={styles.rightContent}>
        <TouchableOpacity onPress={onSubmit}>
          <FeatherIcon name="edit" size={20} color="rgba(0,0,0,1)" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Product = ({route, navigation}) => {
  const {serviceName, products, category, image, serviceId} = route.params;
  const [categoryState, categoryDispatch] = useContext(CategoryContext);
  const categoryLabel = useRef(
    category === 'id'
      ? 'topupCategory'
      : category === 'code'
      ? 'codeCategory'
      : '',
  ).current;

  const renderItem = ({item}) => {
    return (
      <Category
        product={item}
        category={category}
        navigation={navigation}
        serviceName={serviceName}
      />
    );
  };

  useEffect(() => {
    if (!categoryState[categoryLabel][serviceName]) {
      categoryDispatch({
        type: 'UPDATE',
        payload: {label: categoryLabel, products, serviceName},
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Head serviceName={serviceName} image={image} />
      <View style={styles.addBtnsContainer}>
        <TouchableOpacity
          style={
            category === 'code'
              ? styles.addButton
              : [styles.addButton, {width: '100%'}]
          }
          onPress={() =>
            navigation.navigate('AddProductScreen', {
              category,
              serviceName,
            })
          }>
          <Text style={styles.addLabel}>إضافة صنف جديد</Text>
          <Ionicons name="add" size={32} color="rgba(255,255,255,1)" />
        </TouchableOpacity>
        {category === 'code' && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() =>
              navigation.navigate('AddCodesScreen', {
                serviceName,
                serviceId,
              })
            }>
            <Text style={styles.addLabel}>إضافة أكواد</Text>
            <Ionicons name="add" size={32} color="rgba(255,255,255,1)" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.content}>
        <FlatList
          data={categoryState[categoryLabel][serviceName]}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(240,240,240,1)',
  },
  head: {
    flex: 2,
    width: '90%',
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,1)',
    marginVertical: 20,
    elevation: 1,
  },
  addBtnsContainer: {
    flex: 0.7,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  content: {
    flex: 6.3,
    width: '90%',
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    height: '70%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  picture: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  submitImage: {
    position: 'absolute',
    top: '8%',
    right: '2%',
  },
  imageUpdate: {
    padding: 6,
    borderRadius: 10,
    backgroundColor: 'rgba(150,150,150,0.8)',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputTitle: {
    paddingVertical: 0,
    backgroundColor: 'rgba(240,240,240,1)',
    borderBottomWidth: 1,
  },
  title: {
    color: 'rgba(50,50,50,1)',
    fontSize: 24,
    alignSelf: 'center',
    marginRight: 6,
  },
  submitTitle: {
    marginLeft: 10,
  },
  addLabel: {
    marginRight: 6,
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
  },
  categoryContainer: {
    paddingVertical: 10,
    backgroundColor: 'rgba(200, 200, 200, 1)',
    marginBottom: 10,
    paddingLeft: 12,
    flexDirection: 'row',
    borderRadius: 5,
  },
  leftContent: {
    flex: 4,
  },
  centerContent: {
    flex: 4,
    alignItems: 'center',
  },
  rightContent: {
    flex: 2,
    alignItems: 'center',
  },
  pricesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelItem: {
    fontSize: 16,
  },
  textPrice: {
    color: 'rgba(100, 100, 100, 1)',
  },
  available: {
    color: 'rgba(0, 130, 0, 1)',
    fontSize: 16,
  },
  notAvailable: {
    color: 'rgba(200, 0, 0, 1)',
    fontSize: 16,
  },
});

export default Product;
