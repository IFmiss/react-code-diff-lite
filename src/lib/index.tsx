import React, {
  useMemo
} from 'react';

import {
  createPatch
} from 'diff';

import {
  Diff2HtmlConfig,
  html as DiffHtm,
  parse as DiffParse
} from 'diff2html';

import PropTypes from 'prop-types';

import './style.less';

export type ThemeType = 'light' | 'dark' | 'auto';

export interface ICodeDiffProps extends Diff2HtmlConfig {
  oldStr?: string;
  newStr?: string;
  context?: number;
  theme?: ThemeType;
}

const CodeDiff: React.FC<ICodeDiffProps> = ({
  oldStr = '',
  newStr = '',
  context,
  theme = 'auto',
  ...diff2HtmlConfig
}) => {

  const hljs = (html: string): string => {
    return html
      .replace(
        /<span class="d2h-code-line-ctn">(.+?)<\/span>/g,
        '<span class="d2h-code-line-ctn"><code>$1</code></span>'
      );
  }

  const html = useMemo(() => {
    const args = ['',
                oldStr || '',
                newStr || '',
                '',
                '',
                {context: context}];

    const dd = createPatch(...args);

    const outStr = DiffParse(dd, {
      ...diff2HtmlConfig,
      drawFileList: false,
      matching: 'lines'
    });

    const html = DiffHtm(outStr, {
      ...diff2HtmlConfig,
      drawFileList: false,
      matching: 'lines'
    })
    return hljs(html)
  }, [oldStr, newStr])

  return (
    <div className={`react-code-diff-lite ${theme}`}
      dangerouslySetInnerHTML={{__html: html}}></div>
  )
}

CodeDiff.defaultProps = {
  oldStr: '',
  newStr: '',
  context: 0,
  outputFormat: 'side-by-side'
}

CodeDiff.propTypes = {
  oldStr: PropTypes.string,
  newStr: PropTypes.string,
  context: PropTypes.number,
  outputFormat: PropTypes.oneOf([
    'line-by-line',
    'side-by-side'
  ])
};

export default CodeDiff;
