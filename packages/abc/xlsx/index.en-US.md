---
type: Basic
title: xlsx
order: 6
subtitle: Excel
cols: 1
module: import { XlsxModule } from '@delon/abc/xlsx';
---

An Excel file operation based on [sheetjs](http://sheetjs.com/).

> Note: You can also use [js-xlsx](https://github.com/protobi/js-xlsx) to be another Fork by sheetjs library that provides additional options including: images, styles, and more. Finally, use `callback` option to render your excel.

## Dependencies

The sheetjs script file takes the form of lazy loading，you can change the default CDN path (or use the [local path](https://angular.io/guide/workspace-config#asset-config)) via [Global Configuration](/docs/global-config). By default: `https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js`.

## API

### LazyService

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `import(fileOrUrl: File | string)` | Import Excel, return JSON | `Promise<{ [key: string]: any[][] }>` | - |
| `export(options: XlsxExportOptions)` | Export Excel | `Promise<void>` | - |
| `numberToSchema(val: number)` | Numeric to schema name | `string` | - |

### XlsxExportOptions

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[sheets]` | Data source | `{ [sheet: string]: WorkSheet } | XlsxExportSheet[]` | - |
| `[filename]` | file name of excel | `string` | `export.xlsx` |
| `[opts]` | Excel options, see [WritingOptions](https://github.com/SheetJS/sheetjs/blob/master/docbits/81_writeopts.md) | `WritingOptions` | - |
| `[callback]` | Trigger before saving | `(wb: WorkBook) => void` | - |

### [xlsx]

xlsx directive.

```html
<div [xlsx]="XlsxExportOptions">Export</div>
```
