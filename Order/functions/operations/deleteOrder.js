//***This function belongs to delete order***

const connection = require('./../../Service/connection');

module.exports = async function deleteOrder(req, res){
        const { order_id } = req.body; 

        if (!order_id) {
            res.status(400).json({ error: 'Missing order_id parameter' });
            return;
        }

        try{
            const query = 'DELETE FROM "order" WHERE order_id = $1';
            const values = [order_id];
            const result = await connection.query(query, values);

            if (result.rowCount === 0) {
                return res.json('can not see this Order ID')
            } else {
                return res.json(' successfully deleted, you can not see this order anymore');
            }
        }catch(error){
            console.log(error);
            return res.json('Something went wrong');
        }
};
