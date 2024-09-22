import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 20,
    },
    table: {
        display: 'table',
        width: '100%', // Use 100% to fill the width of the page
        margin: '20px 0',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottom: '1px solid #000',
        padding: 8,
    },
    tableCol: {
        width: '50%', // Use 50% to divide the table evenly
        padding: 4, // Adjust padding to prevent overflow
    },
    tableCell: {
        fontSize: 12,
    },
});

const PDFTable = ({ json }) => {
    return (
        <Document>
            <Page style={styles.page} wrap={false}>
                <View style={styles.table}>
                    {json.map((item, index) => (
                        <View key={index} style={styles.tableRow}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{item.name}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{item.details}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

export default PDFTable;
