'use strict';

export default commands => {
  const setSections = new Set();
  const sectionData = [];
  commands.forEach(command => {
    const section = Object.fromEntries(
      Object.entries(command).filter(([key, _]) => key === 'updatedAt'),
    ).updatedAt.split('T')[0];
    if (!setSections.has(section)) {
      setSections.add(section);
      sectionData.push({section, innerData: [command]});
    } else {
      const target = sectionData.find(_section => _section.section === section);
      target.innerData.push(command);
    }
  });
  return sectionData;
};
