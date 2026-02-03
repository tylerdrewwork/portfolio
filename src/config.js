/** Prefix for GitHub Pages (and local build). Use for all public asset paths. */
export const getAssetUrl = (path) =>
    path ? import.meta.env.BASE_URL + path.replace(/^\//, '') : path;

export const contactInfo = {
  fullname: 'Tyler Smith',
  firstname: 'Tyler',
  lastname: 'Smith',
  // handle: '@',
  location: 'Austin, TX',
  role: 'C# Engineer & Unity Developer',
  email: 'tylerdrew.work@gmail.com',
  phone: '+1 713-854-6795',
  // website: 'https://yourwebsite.com',
  linkedin: 'https://www.linkedin.com/in/tyler-smith-atx/',
  github: 'https://github.com/tylerdrewwork',
  resume: getAssetUrl('assets/Tyler_Smith_Experienced_C%23_Engineer.pdf'),
  yearsExperience: 10,
  openToWork: true,
};

export default contactInfo;

