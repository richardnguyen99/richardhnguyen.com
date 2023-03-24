// Manipulate AST

const visit = require("unist-util-visit");
const toString = require("mdast-util-to-string");

module.exports = async ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "blockquote", (node) => {
    let rawTitle = node.children[0].children[0];

    let rawInfo = rawTitle.value.split(" ");
    let rawType = rawInfo[0];
    let title = rawInfo.slice(1).join(" ");

    let isCorrectType = rawType.startsWith("[!") && rawType.endsWith("]");

    if (!isCorrectType) return;

    let type = rawType.slice(2, rawType.length - 1);
    node.children[0].type = "heading";
    node.children[0].depth = 1;
    node.children[0].children[0].value = title;
    node.children[0].data = node.children[0].data || {};
    node.children[0].data.hProperties = {
      className: "title",
    };

    node.data = node.data || {};
    node.data.hProperties = {
      className: `callout ${type}`,
    };
  });

  return markdownAST;
};
