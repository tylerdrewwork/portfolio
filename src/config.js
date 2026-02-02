/** Prefix for GitHub Pages (and local build). Use for all public asset paths. */
export const getAssetUrl = (path) =>
    path ? import.meta.env.BASE_URL + path.replace(/^\//, '') : path;

export const contactInfo = {
  fullname: 'Tyler Smith',
  firstname: 'Tyler',
  lastname: 'Smith',
  handle: '@yourhandle',
  location: 'Location',
  role: 'Product Designer',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  website: 'https://yourwebsite.com',
  linkedin: 'https://www.linkedin.com/in/tyler-smith-atx/',
  github: 'https://github.com/tylerdrewwork',
  twitter: 'https://twitter.com/yourhandle',
  yearsExperience: 4,
  openToWork: true,
};

export default contactInfo;

