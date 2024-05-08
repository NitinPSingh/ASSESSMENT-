export const roleOptions = [
    {
      label: 'Engineering',
      options: [
        { value: 'backend', label: 'Backend' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'fullstack', label: 'Fullstack' },
        { value: 'ios', label: 'IOS' },
       
        { value: 'android', label: 'Android' },
        { value: 'tech lead', label: 'Tech Lead' },
       
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
    { value: 0, label: '0L' },
    { value: 10, label: '10L' },
    { value: 20, label: '20L' },
    { value: 30, label: '30L' },
    { value: 40, label: '40L' },
    { value: 50, label: '50L' },
    { value: 60, label: '60L' }
  ];


  export const jobTypeOptions = [
    { value: 'remote', label: 'Remote' },
    { value: 'on-site', label: 'On Site' }
  ];
  export const experienceOptions = Array.from({ length: 11 }, (_, i) => ({ value: i, label: i.toString() }));
