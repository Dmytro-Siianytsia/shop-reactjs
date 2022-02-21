import { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";

import SECTIONS_DATA from "../../assets/sections.data";

export class DirectoryMenu extends Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps}) => (
					<MenuItem key={id} {...otherSectionProps}/>
				))}
      </div>
    );
  }
}
