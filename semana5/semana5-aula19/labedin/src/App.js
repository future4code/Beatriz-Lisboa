import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import LogoEmail from './components/imagens/cardemail.jpg';
import LogoEndereco from './components/imagens/cardaddress.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fcpq3-1.fna.fbcdn.net/v/t1.0-9/122933789_3374550942621089_787600692075746826_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=vUXyeStN6eEAX-_cUqS&_nc_ht=scontent.fcpq3-1.fna&oh=6a800ec0935fdbc323a1a6f281f3dbbf&oe=606D04C7" 
          nome="Beatriz Lisboa" 
          descricao="Oi, eu sou a Beatriz. Sou Terapeuta Acupunturista e Reikiana, DJ e produtora de eventos. Além disso, atualmente estou em transição de carreira estudando Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
          imagem={LogoEmail}
          nome="Email:"
          descricao="Lmourabia@labenu.com" 
        />

        <CardPequeno
          imagem={LogoEndereco}
          nome="Endereço:"
          descricao="Rua da Amizade, 420"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://image.freepik.com/free-photo/close-up-hand-holding-acupuncture-needle_23-2148815311.jpg" 
          nome="Terapeuta Autônoma" 
          descricao="Atendimentos á domicílio de terapias complementares, além de um projeto chamado Tenda de Cura em alguns eventos culturais, levando as terapias e um ambiente tranquilo para descanso e conversa." 
        />
        
        <CardGrande 
          imagem="https://image.freepik.com/free-photo/image-wooden-table-front-abstract-blurred-restaurant-lights-background_36051-392.jpg" 
          nome="Eventos" 
          descricao="Além de levar o meu projeto pessoal, também trabalhei na produção de alguns desses eventos, cuidando das decorações e trabalhando no caixa, além de fazer mixagens como DJ." 
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
