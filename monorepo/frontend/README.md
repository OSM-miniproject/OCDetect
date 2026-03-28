# OSM
## To run
```bash
npm run dev
```
## Next Notes
public folder will have the resources
### layout.js and page.js
These are two reserved keyword file names, can be used only once per directory
Next uses file based routing, thus different folders in the app dir are pages, and each of the dir should have a page.js exporting a default component to render at that /dirName, you can create more folder in the folder to create more routes
 ~~~
 The profile folder has a page.js which automatically creates the route at /profile, that is the folder name
 ~~~

The layout.js wraps the page.js in all the directories present, it has the metadata for the website, we can have a layout.js for each folder once, which will overwrite the metadata according to the page

for that, we need to add below to the folder
~~~
export const metadata = {
  title: 'OCDetect Profile Page',
  description: 'Profile page for the users',
}
~~~
layout.js has all the other page as children passed to it. It has the Rootlayout function which destructures the children and renders them, So to have a consistent layout all across the webpage, we can include header and footer in the layout.js which will apply it to all subsequent pages
### Components
All the reusable stuff of the website should be in this dir
