import List from '@/views/List';
import { expect } from 'chai'
import Vue from 'vue';

describe('List.vue', () => {
  it('displays items from the list', () => {
    const Constructor = Vue.extend(List);
    const ListComponent = new Constructor().$mount();
    expect(ListComponent.$el.textContent).to.contain('play 3 games');
  })

  it('adds a new item to list on click', () => {
    // build component
    const Constructor = Vue.extend(List);
    const ListComponent = new Constructor().$mount();

    // set input value
    ListComponent.newItem = 'brush my teeth';

    // simulate click event
    const button = ListComponent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    ListComponent._watcher.run();

    // assert list contains new item
    expect(ListComponent.$el.textContent).to.contain('brush my teeth');
    expect(ListComponent.listItems).to.contain('brush my teeth');
  })
})