import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View, useWindowDimensions } from 'react-native';
import ThemeText from '../components/darkmode_text';
import Product_list_item from '../components/product_list_item';
import { ProductList } from '../definitions/product_list';

const fetchProducts = () => {
	const [isLoading, setLoading] = useState(true);
	const [limit, setLimit] = useState(5);
	const [data, setData] = useState<ProductList[]>([]);

	const fetchProducts = async () => {
		try {
			const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
			const json = await response.json();

			setData(json);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
		console.log(limit);
	}, [limit]);

	const renderItem = useCallback(({ item }: { item: ProductList }) => <Product_list_item product={item} />, []);

	const loadMoreItems = () => {
		setLimit((prevLimit) => prevLimit + 10);
	};

	const onRefresh = () => {
		setData([]);
		setLimit(10);
		fetchProducts();
	};

	return (
		<View style={{ flex: 1, padding: 24 }}>
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={data}
					keyExtractor={({ id }) => id}
					renderItem={renderItem}
					ListFooterComponent={<ActivityIndicator />}
					onEndReached={loadMoreItems}
					onEndReachedThreshold={0.5}
					refreshing={false}
					onRefresh={onRefresh}
				/>
			)}
		</View>
	);
};

export default fetchProducts;
