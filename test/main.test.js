
import ReactTestUtils from 'react-dom/test-utils'
import { expect } from 'chai'
import '../src/main.js'

describe('Test: main.js', function() {

  var root = document.getElementById('root').innerHTML;

  it('does load vphreak.net', function() {
    expect(root).to.include('vphreak.net')
  })

  it('does load image', function() {
    expect(root).to.include('<img src=')
  })

  it('does load style', function() {
    var head = document.head.innerHTML;
    expect(head).to.include('<style')
  })

})