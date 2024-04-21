import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { memo, useContext, useState } from 'react';
import { ProductList } from '../definitions/product_list';
import ThemeText from './darkmode_text';
import FastImage from 'react-native-fast-image';
import { ColorSchemeContext } from '../app/theme';
import { D_PINK, D_PURPLE, L_PINK } from '../utils/constants';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from './darkmode_button';

type ProductListItem = {
	product: ProductList;
};

const ProductListItem = ({ product }: ProductListItem) => {
	const [count, setCount] = useState(1);
	const { colorScheme, toggleColorScheme } = useContext(ColorSchemeContext);

	const styles = StyleSheet.create({
		container: {
			backgroundColor: colorScheme === 'light' ? '#393E46' : '#161616',
			padding: 20,
			borderRadius: 10,
			marginVertical: 10,
		},
		categoryText: {
			fontSize: 15,
			color: '#969696',
		},
		descriptionText: {
			fontSize: 15,
			color: '#969696',
		},
		titleText: {
			fontSize: 20,
			fontWeight: '500',
			color: 'white',
			paddingVertical: 2,
		},
		flexSection: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			width: '100%',
			alignItems: 'center',
		},
		price: {
			color: 'white',
			fontSize: 20,
			fontWeight: '600',
			paddingVertical: 2,
		},
		buttons: {
			display: 'flex',
			flexDirection: 'row',
			color: 'white',
			justifyContent: 'center',
			alignItems: 'center',
			columnGap: 10,
		},
	});

	return (
		<View style={styles.container}>
			<Image
				source={{ uri: product.image }}
				style={{ height: 300, resizeMode: 'contain', borderRadius: 10, backgroundColor: 'white', marginBottom: 10 }}
			/>
			<View style={styles.flexSection}>
				<Text style={styles.categoryText}>{product.category}</Text>
				<Text style={styles.categoryText}>
					{product.rating.rate}
					<AntDesign name="star" />
				</Text>
			</View>
			<Text style={styles.titleText}>{product.title}</Text>
			<View style={styles.flexSection}>
				<View style={styles.buttons}>
					<Pressable onPress={() => setCount((prevCount) => prevCount - 1)}>
						<AntDesign name="minus" color="white" />
					</Pressable>
					<Text style={{ color: 'white' }}>{count}</Text>
					<Pressable onPress={() => setCount((prevCount) => prevCount + 1)}>
						<AntDesign name="plus" color="white" />
					</Pressable>
				</View>
				<Text style={styles.price}>${product.price}</Text>
			</View>
			<Text style={styles.descriptionText} numberOfLines={3} ellipsizeMode="tail">
				Rating: {product.description}
			</Text>
			<View style={{ paddingTop: 15 }}>
				<Button title="Add to Cart" onPress={() => alert('added!')} />
			</View>
		</View>
	);
};

export default memo(ProductListItem, (prevProps, nextProps) => prevProps.product.id === nextProps.product.id);
