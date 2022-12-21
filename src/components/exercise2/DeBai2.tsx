import { Anchor, List, } from '@mantine/core';

export default function DeBai2() {
  return <>
    <List type="ordered">
      <List.Item>Tham khảo trang <Anchor href="https://test-fresher.vercel.app/" target="_blank">
        Ví dụ
      </Anchor>
      </List.Item>
      <List.Item>Sử dụng các component trong Mantine
        <List type="unordered">
          <List.Item>
            <Anchor href="https://mantine.dev/core/button/" target="_blank">Button</Anchor>
          </List.Item>
          <List.Item>
            <Anchor href="https://mantine.dev/core/segmented-control/#controlled" target="_blank">SegmentedControl</Anchor>
          </List.Item>
          <List.Item>
            <Anchor href="https://mantine.dev/core/switch/#controlled" target="_blank">Switch</Anchor>
          </List.Item>
          <List.Item>
            <Anchor href="https://mantine.dev/core/divider/" target="_blank">Divider</Anchor>
          </List.Item>
          <List.Item>
            <Anchor href="https://mantine.dev/core/grid/" target="_blank">Grid</Anchor>
          </List.Item>
        </List>
      </List.Item>
      <List.Item>Thêm Button, SegmentedControl, Switch, Divider vào trong màn hình</List.Item>
      <List.Item>Control State của Segment và Switch</List.Item>
      <List.Item>Khai báo typing đúng cho state: ButtonVariant. <Anchor href="https://stackoverflow.com/questions/53650468/set-types-on-usestate-react-hook-with-typescript" target="_blank">
        Ví dụ
      </Anchor>
      </List.Item>
      <List.Item>Dùng State đó để chọn Props Variant và Disabled cho Button </List.Item>
      <List.Item>Sử dụng Grid để phân cột cho SegmentedControl, Switch</List.Item>
      <List.Item>Dùng chức năng Responsive columns của Grid để hiển thị đẹp trên màn hình nhỏ</List.Item>
    </List>
  </>;
}