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
export const TabPanel = ({
  selected = true,
  children,
  component: Component = 'div',
  ...props
}) => {
  if (selected) {
    return <Component {...props}>{children}</Component>;
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
    // use window.matchMedia to show/hide nav
    if (window.matchMedia) {
      const query = window.matchMedia('(max-width: 640px)');
      isMobile = query.matches;
      // revisit this whenever the mediaquery changes.
      query.onchange = ({ matches }) => {
        this.setState({ isMobile: matches });
      };
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
