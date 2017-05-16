import React from 'react'

export class SamplePage extends React.Component {
  render () {
    return (
      <some>
        <h1>This is  from SamplePage.</h1>
        <br />
        Name     : <input type='text' name='name' />
        <br />
        Paasword : <input type='password' name='name' />
        <br />
        <input type='submit' value='Submit' />
      </some>
    )
  }
}
