import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import PDFTable from '../components/PDFTable';

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
    <PDFViewer className='pt-28 md:pt-40 p-3 md:p-10 w-full min-h-screen bg-gradient-to-r from-[#1d1e22] to-[#393f4d]'>
      <PDFTable json={json} />
    </PDFViewer>
  )
}
