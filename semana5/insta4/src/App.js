import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Cris Rocha'}
          fotoUsuario={'https://scontent.fjoi3-1.fna.fbcdn.net/v/t1.0-9/80407078_2223426441293001_5431775968802897920_o.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=A5_FkjNHUikAX8eMd-h&_nc_ht=scontent.fjoi3-1.fna&oh=fc1db5d153701299dd656e79f05918a8&oe=5FAE9FEB'}
          fotoPost={'https://lirp-cdn.multiscreensite.com/d37044ac/dms3rep/multi/opt/Card%C3%A1pio+2019+%282%29-640w.jpeg'}
        />
        <Post
          nomeUsuario={'Vinicius'}
          fotoUsuario={'https://scontent.fjoi3-1.fna.fbcdn.net/v/t1.0-9/64641064_2086076521694661_3279682330540638208_n.jpg?_nc_cat=107&_nc_sid=ad2b24&_nc_ohc=kdcXwE5YTFUAX-CtKLE&_nc_ht=scontent.fjoi3-1.fna&oh=670e41905e6e6005514d9a5ee0dd2b5f&oe=5FADA649'}
          fotoPost={'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-brasil.jpg'}
        />
      </div>
    );
  }
}

export default App;
