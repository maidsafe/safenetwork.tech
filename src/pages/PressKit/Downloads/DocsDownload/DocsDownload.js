import React from 'react'

import DownloadContainer from '../DownloadContainer'
import DocumentDownload from '../DocDownload'

import { genRandomKey } from 'utils'

const DocsDownload = props => {
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
              downloadLink={documents[li.id].url}
              isExternal={documents[li.id].isExternal}
            />
          ))) : null
      }
    </DownloadContainer>
  )
}

export default DocsDownload
