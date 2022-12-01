import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from "./View.js";

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query. Try other keywords.`;
  _message = ``;

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join("");
  }
}

export default new ResultsView();