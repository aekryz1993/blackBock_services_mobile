'use strict';

export default payments => {
  const setSections = new Set();
  const sectionData = [];
  payments.forEach(payment => {
    const section = Object.fromEntries(
      Object.entries(payment).filter(([key, _]) => key === 'updatedAt'),
    ).updatedAt.split('T')[0];
    if (!setSections.has(section)) {
      setSections.add(section);
      sectionData.push({section, innerData: [payment]});
    } else {
      const target = sectionData.find(_section => _section.section === section);
      target.innerData.push(payment);
    }
  });
  return sectionData;
};
