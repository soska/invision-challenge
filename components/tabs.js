import PropTypes from 'prop-types';
import React, { Fragment, Children, cloneElement } from 'react';

/**
 *
 * Default Tabs Navigation Component.
 */
const TabsNav = ({ tabs, onChange }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.name}
        onClick={e => {
          e.preventDefault();
          onChange(tab);
        }}
      >
        {tab.title}
      </li>
    ))}
  </ul>
);

/**
 *
 * TabPanel Component
 */
export const TabPanel = ({ selected = true, children }) => {
  if (selected) {
    return children;
  } else {
    return null;
  }
};

/**
 * Tabs Component
 */
export class Tabs extends React.Component {
  static defaultProps = {
    navComponent: TabsNav,
  };

  state = {
    selected: this.props.selected,
    isMobile: true, //mobile first!
  };

  handleOnChange = tab => this.setState({ selected: tab.name });

  componentDidMount() {
    let isMobile = false;
    if (window.matchMedia) {
      isMobile = window.matchMedia('(max-width: 640px)').matches;
    }
    this.setState({ isMobile });
  }

  filteredChildren = () =>
    this.props.children.filter(child => {
      return child && child.type === TabPanel;
    });

  buildTabsList = () => {
    return Children.map(this.filteredChildren(), (child, index) => {
      const title = child.props.title ? child.props.title : child.props.name;
      const subtitle = child.props.subtitle;
      const name = child.props.name;
      const selected = this.state.selected
        ? this.state.selected === name
        : index === 0;
      return { title, subtitle, name, selected };
    });
  };

  renderNav() {
    if (this.state.isMobile) {
      return null;
    }
    const { navComponent: Nav, onChange } = this.props;
    return <Nav tabs={this.buildTabsList()} onChange={this.handleOnChange} />;
  }

  renderContent() {
    if (this.state.isMobile) {
      return this.props.children;
    }
    return Children.map(this.filteredChildren(), (child, index) => {
      const selected = this.state.selected
        ? this.state.selected === child.props.name
        : index === 0;

      return cloneElement(child, {
        selected,
        ...child.props,
      });
    });
  }

  render() {
    return (
      <Fragment>
        {this.renderNav()}
        {this.renderContent()}
      </Fragment>
    );
  }
}
