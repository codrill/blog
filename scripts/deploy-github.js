const ghPages = require('gh-pages')

ghPages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:mad-rat/blog.git',
  },
  () => {
    console.log('Deployed Successfully!')
  }
)