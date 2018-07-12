module.exports = (items, props) => `
  <script src="/lib/react.production.min.js"></script>
  <script src="/lib/react-dom.production.min.js"></script>

  ${items.map(item => {
    return `<script src="/services/${item}.js"></script>`;
  }).join('\n')}

  <script>
    ${items.map(item => `
      ReactDOM.hydrate(
        React.createElement(${item}, ${props}),
        document.getElementById('${item}')
      );
    `).join('\n')}
  </script>
`;