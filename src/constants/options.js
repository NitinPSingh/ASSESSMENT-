export const roleOptions = [
    {
      label: 'Engineering',
      options: [
        { value: 'backend', label: 'Backend' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'fullstack', label: 'Fullstack' },
        { value: 'ios', label: 'IOS' },
        { value: 'flutter', label: 'Flutter' },
        { value: 'react-native', label: 'React Native' },
        { value: 'android', label: 'Android' },
        { value: 'frontend-tech-lead', label: 'Frontend Tech Lead' },
        { value: 'dev-ops', label: 'Dev-Ops' },
        { value: 'data-engineer', label: 'Data Engineer' },
        { value: 'data-science', label: 'Data Science' },
        { value: 'data-vision', label: 'Data Vision' },
        { value: 'deep-learning', label: 'Deep-Learning' },
        { value: 'test-qa', label: 'Test / Qa' }
      ]
    },
    {
      label: 'Design',
      options: [
        { value: 'designer', label: 'Designer' },
        { value: 'design-manager', label: 'Design Manager' },
        { value: 'graphic-designer', label: 'Graphic Designer' }
      ]
    }
  ];
  

  export const employeeOptions = [
    { value: '1-10', label: '1-10' },
    { value: '11-20', label: '11-20' },
    { value: '21-50', label: '21-50' },
    { value: '51-100', label: '51-100' },
    { value: '101-200', label: '101-200' },
    { value: '201-500', label: '201-500' },
    { value: '500+', label: '500+' }
  ];


  export const salaryOptions= [
    { value: '0L', label: '0L' },
    { value: '10L', label: '10L' },
    { value: '20L', label: '20L' },
    { value: '30L', label: '30L' },
    { value: '40L', label: '40L' },
    { value: '50L', label: '50L' },
    { value: '60L', label: '60L' }
  ];


  export const jobTypeOptions = [
    { value: 'remote', label: 'Remote' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'in-office', label: 'In-office' }
  ];
  export const experienceOptions = Array.from({ length: 11 }, (_, i) => ({ value: i.toString(), label: i.toString() }));
