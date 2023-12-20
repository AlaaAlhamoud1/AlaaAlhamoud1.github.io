// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:flutter/material.dart';

class ImageWithPathWedget extends StatelessWidget {
  final Function()? onTap;
  final String imageName;
  final Color color;
  final double sizeBetween;
  const ImageWithPathWedget(
      {Key? key,
      this.onTap,
      required this.imageName,
      required this.color,
      required this.sizeBetween})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: sizeBetween),
      child: GestureDetector(
        onTap: onTap,
        child:
            Image(color: color, image: AssetImage('assets/images/$imageName')),
      ),
    );
  }
}
