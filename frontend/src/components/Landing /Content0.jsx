import React from "react";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";

class Content extends React.PureComponent {
  getBlockChildren = data =>
    data.map((item, i) => {
      const children = item.children;
      return (
        <Col key={i.toString()} {...item}>
          <div {...children.icon}>
            <img src={children.icon.children} width="100%" alt="img" />
          </div>
          <h5 {...children.title}>{children.title.children}</h5>
          <div {...children.content}>{children.content.children}</div>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
    return (
      <div {...props} {...dataSource.wrapper}>
        <hr />
        <div {...dataSource.page}>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              {...dataSource.block}
              component={Row}
            >
              {listChildren}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content;
