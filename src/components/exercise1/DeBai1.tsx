import { Anchor, List, Text } from '@mantine/core';

export default function DeBai1() {
  return (
    <>
      <List type="ordered">
        <List.Item>Tham khảo trang <Anchor href="https://test-fresher.vercel.app/" target="_blank">
          Ví dụ
        </Anchor>
        </List.Item>
        <List.Item>Sử dụng các component trong Mantine
          <List type="unordered">
            <List.Item>
              <Anchor href="https://mantine.dev/core/card/" target="_blank">Card</Anchor>
            </List.Item>
            <List.Item>
              <Anchor href="https://mantine.dev/core/center/" target="_blank">Center</Anchor>
            </List.Item>
          </List>
        </List.Item>
        <List.Item>Thêm Card vào trong màn hình</List.Item>
        <List.Item>Điều chỉnh căn giữa màn hình</List.Item>
        <List.Item>Hiển thị đúng trên các màn hình độ lớn khác nhau</List.Item>
        <List.Item>Đổi hình ảnh như ví dụ</List.Item>
        <List.Item>Đổi nội dung như ví dụ</List.Item>
        <List.Item>Đổi màu button và badge như ví dụ</List.Item>
      </List>
    </>
  );
}