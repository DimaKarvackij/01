

export default function TransactionHistory({ resultFirssst }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>type</th>
                        <th>amount</th>
                        <th>currency</th>
                    </tr>
                </thead>
                <tbody >
                    {resultFirssst.map((state) => {
                        return <tr key={state.id}>
                            <td>{state.type}</td>
                            <td>{state.amount}</td>
                            <td>{state.currency}</td>
                        </tr>
                    })}
                </tbody>

            </table>

        </div>
    );
}
