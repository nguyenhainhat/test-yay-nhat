import { Anchor, List, Text } from '@mantine/core';

export default function DeBai3() {
  return <>
    <List type="ordered">
      <List.Item>Tham khảo trang <Anchor href="https://test-fresher.vercel.app/" target="_blank">
        Ví dụ
      </Anchor>
      </List.Item>
      <List.Item>Sử dụng hook trong Mantine
        <List type="unordered">
          <List.Item>
            <Anchor href="https://mantine.dev/hooks/use-clipboard/" target="_blank">Clipboard Hook</Anchor>
          </List.Item>
        </List>
      </List.Item>
      <List.Item>Hiện nội dung cho component Pokemon Card từ data như ví dụ</List.Item>
      <List.Item>Dùng useClipboard Copy Description khi nhấn Button</List.Item>
      <List.Item>Khi copy thì đổi nội dung và màu Button trong nửa giây như ví dụ</List.Item>
    </List>
  </>;
}