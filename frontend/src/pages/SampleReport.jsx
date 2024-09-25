import React from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFTable from '../components/PDFTable';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { Button } from '@material-tailwind/react';


const json = [
  {
    name: "Vin:",
    details: '1VXBR12EXCP901213',
  },
  {
    name: "Make:",
    details: 'null',
  },
  {
    name: "Vin:",
    details: '1VXBR12EXCP901213',
  },
  {
    name: "Make:",
    details: 'null',
  },
  {
    name: "Vin:",
    details: '1VXBR12EXCP901213',
  },
  {
    name: "Make:",
    details: 'null',
  },
  {
    name: "Vin:",
    details: '1VXBR12EXCP901213',
  },
  {
    name: "Make:",
    details: 'null',
  },
  {
    name: "Vin:",
    details: '1VXBR12EXCP901213',
  },
  {
    name: "Make:",
    details: 'null',
  },
  {
    name: "Vin:",
    details: '1VXBR12EXCP901213',
  },
  {
    name: "Make:",
    details: 'null',
  },
  {
    name: "Vin:",
    details: '1VXBR12EXCP901213',
  },
  {
    name: "Make:",
    details: 'null',
  },
  {
    name: "Vin:",
    details: '1VXBR12EXCP901213',
  },
  {
    name: "Make:",
    details: 'asdfasfd',
  },
];

export const SampleReport = () => {
  return (
    <>
      {isMobile ?
        <div className='py-28 md:pt-40 p-3 md:p-10 min-h-screen flex items-center justify-center w-full bg-gradient-to-r from-[#1d1e22] to-[#393f4d]'>
          <MobileView className='px-20 py-60 bg-gray-700 rounded'>
            <PDFDownloadLink
              document={json && <PDFTable json={json} />
              }
              fileName="Vin Sample.pdf"
              className=''>

              {({ loading }) => (
                <Button color='indigo' className='hover:bg-[#8983ff]/90'>
                  {loading ? 'Loading...' : 'Download PDF'}
                </Button>
              )}

            </PDFDownloadLink >
          </MobileView >
        </div>
        :
        <BrowserView>
          <PDFViewer className='pt-28 md:pt-40 p-3 md:p-10 w-full min-h-screen bg-gradient-to-r from-[#1d1e22] to-[#393f4d]'>
            <PDFTable json={json} />
          </PDFViewer>
        </BrowserView>
      }
    </>
  )
}
