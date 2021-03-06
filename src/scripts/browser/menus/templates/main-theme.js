import $ from 'browser/menus/expressions';

export default {
  label: 'Theme',
  submenu: global.manifest.themes.map(theme => ({
    type: 'radio',
    label: theme,
    theme: theme.toLowerCase(),
    click: $.all(
      $.themeCss($.key('theme'), css => $.sendToWebView('apply-theme', $.val(css))),
      $.setPref('theme', $.key('theme'))
    ),
    parse: $.all(
      $.setLocal('checked', $.eq($.pref('theme'), $.key('theme')))
    )
  }))
};
