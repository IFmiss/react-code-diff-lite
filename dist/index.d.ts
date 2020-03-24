import React from 'react';
import 'diff2html/bundles/css/diff2html.min.css';
/**
 * 行内对比  =>  'line-by-line'
 * 新增窗口 两个窗口对比  =>  'side-by-side'
 */
export declare type ICodeOutputFormatType = 'line-by-line' | 'side-by-side';
export interface ICodeDiffProps {
    oldStr: string;
    newStr: string;
    context?: number;
    outputFormat?: ICodeOutputFormatType;
}
declare const CodeDiff: React.FC<ICodeDiffProps>;
export default CodeDiff;
