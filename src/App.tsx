import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NameAndDataComponent } from './dashboard/NameAndDataComponent/NameAndDataComponent';
import { DataTableComponent } from './dashboard/DataTableComponent/DataTableComponent';

function App() {
  // สร้างตัวเลขสุ่มจำนวนเต็มระหว่าง 0 ถึง 99999
const randomSuffix = () => Math.floor(Math.random() * 100000).toString().padStart(5, '0');

// ข้อมูลตัวอย่างที่มีตัวเลข running แบบสุ่ม
const sampleData = [
  { no: 1, poNo: `PO-E3101006703-${randomSuffix()}`, description: '[Thai text]...', qty: 450.00 },
  { no: 2, poNo: `PO-E3101006703-${randomSuffix()}`, description: '[Thai text]...', qty: 460.00 },
  { no: 3, poNo: `PO-E3101006703-${randomSuffix()}`, description: '[Thai text]...', qty: 465.00 },
  { no: 4, poNo: `PO-E3101006703-${randomSuffix()}`, description: '[Thai text]...', qty: 470.00 },
  { no: 5, poNo: `PO-E3101006703-${randomSuffix()}`, description: '[Thai text] A4', qty: 475.00 }
];


  return (
    <>
      <div style={{width: '300px'}}>
        <NameAndDataComponent name={'Submission Count'} data={'220'} />
      </div>
      <div>
        <DataTableComponent data={sampleData} />
      </div>
    </>
  )
}

export default App
