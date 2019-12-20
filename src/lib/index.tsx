import React, {
  useMemo
} from 'react'

import {
  createPatch
} from 'diff'

import {
  Diff2Html
} from 'diff2html'

import 'diff2html/dist/diff2html.css'

export enum ICodeOutputFormatEnum {
  /**
   * 行内对比
   */
  INLINE = 'line-by-line',

  /**
   * 新增窗口 两个窗口对比
   */
  OUTSIDE = 'side-by-side'
}

export interface ICodeDiffProps {
  oldStr: string;
  newStr: string;
  context?: number;
  outputFormat?: ICodeOutputFormatEnum;
}

const CodeDiff: React.FC<ICodeDiffProps> = (props) => {
  const hljs = (html: string): string => {
    return html.replace(/<span class="d2h-code-line-ctn">(.+?)<\/span>/g, '<span class="d2h-code-line-ctn"><code>$1</code></span>')
  }

  const { oldStr, newStr, context, outputFormat} = props
  const html = useMemo(() => {
    let args = ['', oldStr || '',
                newStr || '',
                '',
                '',
                {context: context}]
    let dd = createPatch(...args)
    let outStr = Diff2Html.getJsonFromDiff(dd, {
                                                inputFormat: 'diff',
                                                outputFormat: outputFormat,
                                                showFiles: false,
                                                matching: 'lines'
                                              })
    let html = Diff2Html.getPrettyHtml(outStr, {
                                                inputFormat: 'json',
                                                outputFormat: outputFormat,
                                                showFiles: false,
                                                matching: 'lines'
                                              })
    return hljs(html)
  }, [oldStr, newStr])

  return (
    <div className='react-code-diff' dangerouslySetInnerHTML={{__html: html}}></div>
  )
}

CodeDiff.defaultProps = {
  oldStr: '',
  newStr: '',
  context: 0,
  outputFormat: ICodeOutputFormatEnum.INLINE
}

export default CodeDiff
