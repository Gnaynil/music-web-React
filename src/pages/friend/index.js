import React, { memo } from 'react';

import {
  SubjectWrapper
} from './style'


import {
  Form,
  Input,
  Button,
  Cascader,
  DatePicker,
} from 'antd';

import 'moment/locale/zh-cn';
import { addressData } from '@/common/data'

import TextArea from 'antd/lib/input/TextArea';

const { RangePicker } = DatePicker;



const validateMessages = {
  required:'请输入 ${label}',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} 一定大于 ${min}',
  }
};

const rangeConfig = {
  rules: [{ type: 'array', required: true, message: '请选择开始时间和结束时间' }],
};

//提交为moment对象
const TimeRelatedForm = () => {
  return (
    <Form.Item name="action-time" key="subject-time" label="活动时间" {...rangeConfig}>
      <RangePicker />
    </Form.Item>
  );
};



export default memo(function HYFriend() {
  const addr = [];
  const province = Object.keys(addressData);
  for (let item in province) {
    const key = province[item];
    const cityList = [];
    if (addressData[key].length > 0) {
      for (let item1 in addressData[key]) {
        const obj = {
          'value': addressData[key][item1],
          'label': addressData[key][item1]
        }
        cityList.push(obj);
      }
    }
    const obj = {
      'value': key,
      'label': key,
      'children': cityList
    }
    addr.push(obj);
  }


  return (
    <SubjectWrapper>


      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        size={"small"}
        className="form-list"
        validateMessages={validateMessages}

      >
        <Form.Item label="名称"
          name={['user', 'name']}
          rules={[{ required: true }]}
        >
          <Input style={{ width: 300 }} />
        </Form.Item>

        <Form.Item label="活动单价"
          name={['user', 'price']}
          rules={[{ required: true }]}
        >
          <Input prefix="￥" suffix="元" style={{ width: 150 }} />

        </Form.Item>

        <TimeRelatedForm />

        <Form.Item label="活动地点">
          <Cascader
            options={addr}
            style={{ width: 300 }}
            rules={[{ required: true, message: '请输入你的活动地点!' }]}
          />
          <TextArea row={2} style={{ width: 350 }}/>
        </Form.Item>

        <Form.Item label="活动人数"
          name={['user', 'people']}
          rules={[{ required: true }]}
        >
          <Input  suffix="人" style={{ width: 100 }} />
        </Form.Item>
        
        <Form.Item label=" " colon={false}>
          <Button type="primary"className="button-color" htmlType="submit">
            提交
        </Button>
        </Form.Item>
      </Form>
    </SubjectWrapper>
  )
})
