### PRIJECT NAME
News Highlight
### PROJECT AUTHOR
Suad M.Shire
### DESCRIPTION
News Highlights is a web appliction that displays a list of news sources from around the world. A user is able to click on a news source and view an abreviated version of the particular news article. Clicking on the news article will then redirect you to the news article's web page.
### PREREQUISITES
You need the following to start working on the project on your local computer:
* A computer running on either Windows, MacOS or Ubuntu operating system installed with the following:

```
-Python version 3.6
-Flask
-Pip
-virtualenv
-A text  Editor
```
### PROJECT SETUP INSTRUCTION
- Clone this repository to your local computer.
- Ensure you have python3.6 installed in your computer.
- From the terminal navigate to the cloned project folder.
- Create a virtual environment and access the folder via your virtual amchine.
- Visit https://newsapi.org/ and register for an API key.
- Create start.sh file and in it write the following lines:
```
 export NEWS_API_KEY='<Your-Api-Key>'
 python3.6 manage.py server`
 ```

 - Run chmod +x start.sh follwoed by ./start.sh while in the project folder to start the project.
 - Once started, the project can be accessed on your localhost using the address: localhost:5000.
 - Alternatively the application can be accessed by visiting
 
 
 ### TECHNOLOGIES USED
 - python v3.6
 - Boostrap
 - Flask
 ### DEPLOYING (LIVE LINK)

### BEHAVIOR DRIVEN DEVELOPMENT (SPECIFICATIONS)
| Behaviour | Input | Output |
| :---------------- | :---------------: | ------------------: |
| Display news sources | **On page load** | List of various news sources is displayed per category |
| Display articles from a news source | **Click a news source** | Redirected to a page with a list of articles from the source |
| Display the preview of an article | **On page load** | Each article displays an image, title, description and publication date |
| Read an entire article | **Click an article** | Redirected to the news source's site to read the entire article |
### CONTACT 
sm.ha21@hotmail.com
### LICENSE 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2020 Suad7
