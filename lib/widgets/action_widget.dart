// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:flutter/material.dart';

class ActionWidget extends StatelessWidget {
  final Function()? ontap;
  final String text;
  const ActionWidget({
    Key? key,
    this.ontap,
    required this.text,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Size size = MediaQuery.of(context).size;
    return Container(
      margin: const EdgeInsets.all(15),
      child: GestureDetector(
        onTap: ontap,
        child: Text(text, style: const TextStyle(color: Colors.white)),
      ),
    );
  }
}
