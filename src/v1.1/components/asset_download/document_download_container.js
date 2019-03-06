import React from 'react'

import DownloadContainer from './download_container'
import DocumentDownload from './document_download'

import {genRandomKey} from '~src/utils'

const DocumentDownloadContainer = props => {
  const { content, documents } = props
  const { list } = content
  return (
    <DownloadContainer data={content} isSmall isDocument>
      {
        (list && list.length > 0) ? (
          list.map(li => (
            <DocumentDownload
              key={genRandomKey()}
              title={li.title}
              para={li.para}
              buttonName="Download"
              downloadLink={documents[li.id]}
            />
          ))) : null
      }
    </DownloadContainer>
  )
}

export default DocumentDownloadContainer
