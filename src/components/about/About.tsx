import { Title, Text, List, Anchor, Code } from '@mantine/core';

export function About() {

  return (
    <>
      <Title order={1}>Giải Thích Yêu Cầu</Title>

      <Text mt="xl">
        Các bài tập trên trang này nhằm kiểm tra khả năng tự học, và các kỹ năng lập trình cơ bản của ứng viên.
      </Text>
      <Text>
        Bạn hãy làm các bài tập theo thứ tự. Bấm vào đề bài để xem yêu cầu và ví dụ.
      </Text>
      <Text>
        Các bạn ứng viên chưa có kinh nghiệm có thể được cho thêm thời gian để học các kiến thức cần thiết.
      </Text>
      <Text>
        Một số nguồn để học và tham khảo trước khi làm bài như sau.
      </Text>
      <List type="unordered" mt="xl">
        <List.Item>
          <Anchor href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview" target="_blank">
            Căn bản Javascript
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target="_blank">
            Giới thiệu Typescript
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://www.w3schools.com/html/html_basic.asp" target="_blank">
            Giới thiệu HTML
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://www.w3schools.com/css/default.asp" target="_blank">
            Giới thiệu CSS
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://reactjs.org/tutorial/tutorial.html" target="_blank">
            Căn bản React
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://mantine.dev/pages/basics/" target="_blank">
            Giới thiệu Mantine
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://www.youtube.com/watch?v=E6ADS2k8oNQ&t=460s" target="_blank">
            Sử dụng Git trong VSCode
          </Anchor>
        </List.Item>
      </List>

      <Text mt="xl">
        Để Bắt Đầu bạn lấy <Anchor
          href="/"
        >Source Code</Anchor> từ Github về và chạy lệnh <Code>npm install</Code> để cài đặt các thư viện cần thiết.
      </Text>
      <Text>
        Để gửi bài làm, Bạn hãy zip source của mình như sau <Code>git archive -o latest.zip HEAD</Code>. Sau đó gửi file zip này qua email.
      </Text>
    </>
  );
}
