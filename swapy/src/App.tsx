import { useEffect, useRef, useState } from 'react'
import './style.css'
import { createSwapy } from 'swapy'

// Configuring slot items, including slot with nothing inside
const DEFAULT = {
  '1': 'a',
  '3': 'c',
  '4': 'd',
  '2': null
}

// -----> COMPONENTS <-----
function A() {
  return (
    <>
      <div className="item a" data-swapy-item="a">
        {/* Handle to move item */}
        <div className="handle" data-swapy-handle></div>
        <div>A</div>
      </div>
    </>
  )
}

function C() {
  // to persist on re-render, need to save in localStorage
  const [count, setCount] = useState(() => {
    console.log(localStorage)
    const savedCount = localStorage.getItem('count')
    return savedCount ? parseInt(savedCount) : 0
  })

  useEffect(() => {
    localStorage.setItem('count', count.toString())
  }, [count])

  return (
    <>
      <button className="item c" data-swapy-item="c" onClick={ () => setCount(count + 1) }>
        <div>{count}</div>
      </button>
    </>
  )
}

function D() {
  return (
    <>
      <div className="item d" data-swapy-item="d">
        <div>D</div>
      </div>
    </>
  )
}

// Function to return appropriate component based on itemId
function getItemById(itemId: 'a' | 'c' | 'd' | null) {
  switch (itemId) {
    case 'a':
      return <A />
    case 'c':
      return <C />
    case 'd':
      return <D />
  }
}


function App() {
  // Get slot item from localStorage or use default if not available
  const slotItems: Record<string, 'a' | 'c' | 'd' | null> = localStorage.getItem('slotItem') ? JSON.parse(localStorage.getItem('slotItem')!) : DEFAULT


  useEffect(() => {
    // Initialize Swapy after component mount
    const container = document.querySelector('.container')!
    const swapy = createSwapy(container)

    // Save new config to localStorage when items are swapped
    swapy.onSwap(({ data }) => {
      localStorage.setItem('slotItem', JSON.stringify(data.object))
    })
  }, [])

  return (
    <>
      <div className="container">
        {/*Slot 1*/}
        <div className="slot a" data-swapy-slot="1">
          {getItemById(slotItems['1'])}
        </div>
        <div className="second-row">
          {/*Slot 2*/}
          <div className="slot b" data-swapy-slot="2">
            {getItemById(slotItems['2'])}
          </div>
          {/*Slot 3*/}
          <div className="slot c" data-swapy-slot="3">
            {getItemById(slotItems['3'])}
          </div>
        </div>
        {/*Slot 4*/}
        <div className="slot d" data-swapy-slot="4">
          {getItemById(slotItems['4'])}
        </div>
      </div>
    </>
  )
}

export default App


/**
 * Using `key` in components breaks b/c react will take each element -> destroy -> create new instance in DOM. Can add key to useEffect dependency array to circumvent
 * utilize localStorage to persiste useState rerenders
 */
