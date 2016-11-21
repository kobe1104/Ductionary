## QuickDic

### Background


Going back and forth between the webpage you are reading and Google translate can be annoying and a waste of your time.
QuickDic is designed and created to solve this problem. This Chrome extension allows users to get the definition of any words by simply double clicking on them.
Like the definitions if you are satisfied with it by giving it a thumb-up or thumb-down if you feel the opposite.

This extension will be powered by <a href="http://www.urbandictionary.com/">Urban Dictionary</a>

### Functionality & MVP

With this extension, users will be able to:

- [ ] See a popup window with word definitions by double clicking the words,
- [ ] Rate definitions by clicking on thumb-up or thumb-down to dislike,
- [ ] Close the window by clicking anywhere else.


### Wireframes

![wireframes](./docs/wireframes/chrome-extension.png)

### Technologies & Technical Challenges

This extension will be implemented using the standard Chrome extension technology: Javascript, HTML, CSS, React and Redux.  In addition to the `manifest.json`, `package.json` and `webpack.config.js` files, there will be one script:

- `content.js`: This will handle the logic and events of DOM base on users' actions.


There will also be two HTML files to display the content:

- `window_style.css`: this will handle the styling of everything in the popup window.
- `window.html`: this file will take care of the rendering part of the window.

The primary technical challenges will be:

- Identifying the selected word from users actions,
- Requesting definition from Urban dictionary with an API,
- Response with users' rating.

The words will be retrieved from the DOM when an event listener is trigger. `content.js` will do some necessary parsing and make a request to Urban dictionary. The response from Urban dictionary should include the definition and the current rating of it. Popup window will show up with the information mentioned above. Depends on users rating, `content.js` will either do nothing or send a response to update the rating of the definition.

### Implementation Timeline

**Day 1**: Get started on the infrastructure of the extension, following <a href="https://developer.chrome.com/extensions/getstarted">this guide</a> from Chrome.  By the end of the day, I will have:

- A completed `package.json`
- A completed `webpack.config.js`
- A completed `manifest.json`
- The ability to locate and alter a DOM element by class

**Day 2**: Work on identifying selected words as well as how to use Urban dictionary API to retrieve data.  By the end of the day, I will have:

- The ability to identify the words users want to know.
- The basic knowledge of how Urban dictionary API works.

**Day 3**: I will focus on rendering the definition window with rating options and sending responses to update definition rating.  By the end of the day, I will have:

- Definition window rendered.
- Ratings updated on Urban dictionary.

**Day 4**: Focus on polishing and refactoring.  By the end of the day:

- The extension should be both fully functional and having a pleasing appearance.
