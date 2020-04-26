import React from 'react';
import './App.css';
import HttpService from './httpService';

class App extends React.Component{

  constructor(props) {
        super(props);
        this.state = {
          tempData: [],
          tempVersion: [],
          templateName: 'DEFAULT',
          versionNo:'DEFAULT',
          allData:[],
          urlEntry: '',
        }
    }
componentDidMount(){
    this.initFunction();
}

initializaVal = ()=>{
  this.setState({
    templateName: 'DEFAULT',
    versionNo:'DEFAULT',
    urlEntry:''
  })
}

initFunction = ()=>{
    const query1 = HttpService.getTemplate()
    const query2 = HttpService.allData();
    Promise.all([query1,query2]).then(
      (response)=>{
        this.setState({ tempData: response[0].data.contents });
        this.setState({allData:response[1].data});
      },error=>{
        console.error('Error occured');
      }
    )
}

onSelect = (event)=>{
  const value = (event.target.value);
  const name = (event.target.name);
  switch(name){
    case 'template':
      this.setState(
        { tempVersion: this.state.tempData[value].versions, 
          templateName: this.state.tempData[value].name});
    break;
    case 'version':
      this.setState({versionNo:value})
    break;
    case 'url':
      this.setState({urlEntry:value})
    break;
    default:
    break;
  }
}

onSave = ()=>{
  HttpService.saveData(
    {name:this.state.templateName,url:this.state.urlEntry,version:this.state.versionNo})
    .then((res)=>{
      this.initFunction();
      this.initializaVal();
    },(error)=>{})
}

onDelete = (id)=>{
  HttpService.deleteData(id).then(
    res=>{
      this.initFunction();
      this.initializaVal();
    },error=>{

    }
  )
}

render() {
  return (
    <div className="App container">
      <div className="row form-group">
          <div className="col-md-4 col-sm-4">
            <div className="input-group mb-6">
              <div className="input-group-prepend">
                <label className="input-group-text">Template</label>
              </div>
              <select name="template" value={this.state.templateName} className="custom-select" onChange={this.onSelect}>
                <option value="DEFAULT" disabled>Pick one</option>
                 {this.state.tempData.map((tName, i)=>{
                   return <option key={i} value={i}>{tName.name}</option>
                 })}
              </select>
            </div>
          </div>

          <div className="col-md-3 col-sm-3">
            <div className="input-group mb-6">
              <div className="input-group-prepend">
                <label className="input-group-text">Version</label>
              </div>
              <select name="version" value={this.state.versionNo} className="custom-select" onChange={this.onSelect}>
                <option value="DEFAULT" disabled>Pick one</option>
                {this.state.tempVersion.map((v,i)=>{
                  return <option key={i} value={v}>{v}</option>
                })} 
              </select>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="input-group mb-6">
              <div className="input-group-prepend">
                <label className="input-group-text">URL</label>
              </div>
              <input className="form-control" value={this.state.urlEntry} name="url" onChange={this.onSelect}/>
            </div>
          </div>

          <div className="">
            <button className="btn btn-primary" onClick={this.onSave}>Save</button>
          </div>
      </div>
      <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
                <tr>
                  <th>Serial no</th>
                  <th>Name</th>
                  <th>Version</th>
                  <th>URL</th>
                  <th>Deploy Date</th>
                </tr>
        </thead>
        <tbody>
                {this.state.allData.map((d,i)=>{
                  return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{d.name}</td>
                    <td>{d.version}</td>
                    <td>{d.url}</td>
                    <td>{d.deployedAt}
                    <svg onClick={()=>{this.onDelete(d._id)}} className="bi bi-trash-fill float-right pointer" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clipRule="evenodd"/>
                    </svg>
                    </td>
                  </tr>
                })}
        </tbody>
      </table>
      </div>
    </div>
  );
}
}
export default App;
