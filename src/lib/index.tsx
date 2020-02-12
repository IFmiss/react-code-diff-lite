import React, {
  useMemo
} from 'react'

import {
  createPatch
} from 'diff'

import {
  html as DiffHtm,
  parse as DiffParse
} from 'diff2html'

import 'diff2html/bundles/css/diff2html.min.css'

/**
 * 行内对比  =>  'line-by-line'
 * 新增窗口 两个窗口对比  =>  'side-by-side'
 */
export type ICodeOutputFormatType = 'line-by-line' | 'side-by-side'

export interface ICodeDiffProps {
  oldStr: string;
  newStr: string;
  context?: number;
  outputFormat?: ICodeOutputFormatType;
}

const CodeDiff: React.FC<ICodeDiffProps> = (props) => {
  const hljs = (html: string): string => {
    return html.replace(/<span class="d2h-code-line-ctn">(.+?)<\/span>/g, '<span class="d2h-code-line-ctn"><code>$1</code></span>')
  }

  const { oldStr, newStr, context, outputFormat} = props
  const html = useMemo(() => {
    let args = ['',
                oldStr || '',
                newStr || '',
                '',
                '',
                {context: context}]
    let dd = createPatch(...args)
    let outStr = DiffParse(dd, {
                                outputFormat: outputFormat,
                                drawFileList: false,
                                matching: 'lines'
                              })
    let html = DiffHtm(outStr, {
                                outputFormat: outputFormat,
                                drawFileList: false,
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
  outputFormat: "side-by-side"
}

export default CodeDiff
