import { Anchor, List, } from '@mantine/core';

export default function DeBaiB1() {
  return <>
    <List type="ordered">
      <List.Item>Tham khảo trang <Anchor href="https://test-fresher.vercel.app/" target="_blank">
        Ví dụ
      </Anchor>
      </List.Item>
      <List.Item>Sử dụng các hàm cho Array trong Javascript
        <List type="unordered">
          <List.Item>
            <Anchor href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Array</Anchor>
          </List.Item>
        </List>
      </List.Item>
      <List.Item>Cập nhật tính năng cho các hàm trong file arrayHandlers.ts</List.Item>
      <List.Item>Đếm các số chia hết cho 3</List.Item>
      <List.Item>Tính Tổng</List.Item>
      <List.Item>Tìm số 10 có tồn tại trong mảng hay không</List.Item>
      <List.Item>Lọc ra 1 mảng nhỏ hơn chưa các số chia hết cho 7</List.Item>
    </List>
  </>;
}