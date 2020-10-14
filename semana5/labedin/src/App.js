import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fjoi3-1.fna.fbcdn.net/v/t1.0-9/67095152_2107283966240583_2905899199444811776_o.jpg?_nc_cat=101&_nc_sid=174925&_nc_ohc=9c3qPCmR5bIAX8hSmjc&_nc_ht=scontent.fjoi3-1.fna&oh=5d99ea389f1eef3522fabf837c570d12&oe=5FAE9271" 
          nome="Cris Rocha" 
          descricao="Me chamo Cristiane da Rocha, moro em Rio Negrinho SC, sou mãe e esposa, e Desenvolvedora Full Stack em formação. Possuo conhecimento em HTML e CSS, e como linguagem de programação,  Javascript e PHP."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
          image="https://ecommercedesucesso.com.br/wp-content/uploads/2018/02/Como-criar-um-email-personalizado-2.png"
          adress="crisrocha.dev@gmail.com"
          option="Email: "
        />
        <CardPequeno
          image="https://www.compass.adm.br/wp-content/uploads/2017/07/endereco-fiscal.png"
          adress="Rua das Hortencias,121,Industrial Norte, Rio Negrinho SC"
          option="Endereço: "
        />
      </div>
      <h2>Alguns projetos que participei ou desenvolvi.</h2>
      <div className="page-section-container">
        <CardGrande
          imagem="https://image.freepik.com/vetores-gratis/campanha-de-icone-de-cartao-bancario-de-credito-de-debito-transacao-sem-dinheiro-para-o-modelo-de-pouso-de-pagina-inicial-do-site-web-com-estilo-cartoon_197170-398.jpg"
          nome="Site Cashless Transation"
          descricao="Esta imagem eu retirei da internet para usar de exemplo na construção deste layout"
        />
        <CardGrande
          imagem="https://expressodelivery.com.br/assets/img/aplicativo-pizzaria-delivery.png"
          nome="Express Delivery App"
          descricao="Esta imagem eu retirei da internet para usar de exemplo na construção deste layout"
        />
        <CardGrande
          imagem="https://www.jivochat.com.br/blog/assets/images/compressed/blog2/modelos-de-sites/image_10-modelos-de-sites-futurio.jpg"
          nome="Site Futurio"
          descricao="Esta imagem eu retirei da internet para usar de exemplo na construção deste layout"
        />
       
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
