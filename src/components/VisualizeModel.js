import React from 'react'
import { Modal, Button, Divider } from 'antd-v3';
import { Tabs } from 'antd-v3';
import TableComp from './TableComp';
import PieChart from './PieChart';
const { TabPane } = Tabs;

function VisualModel({ isModalVisible, setIsModalVisible }) {

    const content = (

        <Tabs type="card">
            <TabPane tab="Pie Chart" key="1">
                <PieChart/>
            </TabPane>
            <TabPane tab="Table" key="2">
                <TableComp />
            </TabPane>
        </Tabs>

    )

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <Modal visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                title={content}
            >

                <Divider />
                <div className='antFooter'>
                    <Button onClick={handleOk}>Ok</Button>
                </div>
            </Modal>
        </div>
    )
}

export default VisualModel