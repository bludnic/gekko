const { marked } = require('marked');

// add `target='_blank'` to outgoing links

// https://github.com/chjj/marked/pull/451#issuecomment-49976076

const myRenderer = {
  link(href, title, text) {
    var external, newWindow, out;
    external = /^https?:\/\/.+$/.test(href);
    newWindow = external || title === 'newWindow';
    out = "<a href=\"" + href + "\"";
    if (newWindow) {
      out += ' target="_blank"';
    }
    if (title && title !== 'newWindow') {
      out += " title=\"" + title + "\"";
    }
    return out += ">" + text + "</a>";
  }
}

marked.use({ renderer: myRenderer });

export default marked;
