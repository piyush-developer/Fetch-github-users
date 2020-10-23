import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Form, Card, Image, Icon} from 'semantic-ui-react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


const [name, setName]= useState('');
const [userName, setUserName]= useState('');
const [login,setLogin] = useState('');
const [id, setId] = useState('');
const [avatar_url, setAvatar]= useState('');
const [followers, setFollowers] = useState('');
const [following, setFollowing] = useState('');
const [html, setHtml] = useState('');
const [public_repos, Repos] = useState('');
const [userInput,setUserInput] = useState('');


useEffect(() => {
 fetch(`https://api.github.com/users`)
 .then(res => res.json())
 .then(data => {
   console.log(data);
  setData(data);
 });

}, [])


const setData = ({login, id, avatar_url, followers, following,html,name,userName,public_repos}) =>{
 setLogin(login);
 setId(id);
 setAvatar(avatar_url);
 setFollowers(followers);
 setFollowing(following);
 setHtml(html);
 setName(name);
 setUserName(userName);
 Repos(public_repos);
};

const handleSearch = e =>{
  setUserInput(e.target.value);
}

const handleSubmit = () =>{
  fetch(`https://api.github.com/users/${userInput}`)
  .then(res => res.json())
  .then(data => {
    setData(data);
  })
}

  return (
    <div className="App">
     <div className='navbar'><h2 id="title"> Github Search </h2></div>
     
     <div className='search'><br/>
     <Form onSubmit={handleSubmit}>
     <Form.Group>
     <Form.Input placeholder='Github user'
     name='github user' onChange={handleSearch} />
    <Form.Button content='Search'/>
    </Form.Group>
    </Form>
    </div>
     <div>
     <Table striped bordered hover className="table">
  <thead>
    <tr>
      <th>#</th>
      <th>User Name</th>
      <th>Full Name</th>
      <th>Followers</th>
      <th>Following</th>
      <th>Repos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{login}</td>
      <td>{name}</td>
      <td>{followers}</td>
      <td> {following}</td>
      <td>{public_repos}</td>
    </tr>
    </tbody>
    </Table>
    </div>
     
    <div className='card'>
      <Card>
      <Image src={avatar_url}
      wrapped
      ui={false}/>
      <Card.Content>
      <Card.Header>{name}</Card.Header>
       <Card.Header>{userName}</Card.Header>
      
      </Card.Content>
      <Card.Content extra>
      <a>
      <Icon name='user'/>
      {followers} Followers
      </a>
      </Card.Content>
       <Card.Content extra>
      <a>
      <Icon name='user'/>
      {public_repos} Repos
      </a>
      </Card.Content>
       <Card.Content extra>
      <a>
      <Icon name='user'/>
     {following} Following
      </a>
      </Card.Content>
      </Card>
    </div>
    </div>
    
  );
}

export default App;
