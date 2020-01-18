import React from 'react';
import Button from '../../components/button/Button.jsx';
import IMG1 from '../../../static/shassic1.png'
import IMG2 from '../../../static/shassic2.png'
import IMG3 from '../../../static/shassic3.png'
import IMG4 from '../../../static/shassic4.png'
import IMG5 from '../../../static/shassic5.png'

const img = [
  { id: 1, path: IMG1, desc: null },
  { id: 2, path: IMG2, desc: null },
  { id: 3, path: IMG3, desc: null },
  { id: 4, path: IMG4, desc: null },
  { id: 5, path: IMG5, desc: null },
]

const Shassic = () => {

  return (
    <div style={{ width: 'calc(100vw - 15px)', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ width: 680, alignSelf: 'center' }}>
        <div style={{ margin: '30px 0' }}>
          <Button onClick={() => window.history.back()}>{'<'}</Button>
        </div>
        <div style={{ marginBottom: 30 }}>

        </div>
        <div>
          {
            img.map((item) => {
              return <img style={{ marginBottom: 30, maxWidth: 325, marginRight: 15 }} key={item.id} src={item.path} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Shassic;
